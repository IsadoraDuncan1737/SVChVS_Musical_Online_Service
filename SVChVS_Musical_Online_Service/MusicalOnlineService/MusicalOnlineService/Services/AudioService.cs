using MusicalOnlineService.Services.Interfaces;
using MusicalOnlineService.Models;
using Microsoft.AspNetCore.Hosting;
using System.IO;

namespace MusicalOnlineService.Services
{
    public class AudioService : IAudioService
    {
        private string _location;

        public AudioService(IWebHostEnvironment appEnvironment)
        {
            var location = appEnvironment.WebRootPath;
            _location = location + @"\Performers\";
        }

        public void Create(AudioFile audioFile)
        {
            string fileName = $"{audioFile.TrackTitle}.mp3";
            string filePath = _location + @$"{audioFile.PerformerName}\{audioFile.AlbumTitle}\";
            Directory.CreateDirectory(filePath);
            filePath += fileName;
            byte[] fileBytes = new byte[audioFile.File.Length];
            audioFile.File.Read(fileBytes, 0, (int)audioFile.File.Length);
            File.WriteAllBytes(filePath, fileBytes);
        }
    }
}
