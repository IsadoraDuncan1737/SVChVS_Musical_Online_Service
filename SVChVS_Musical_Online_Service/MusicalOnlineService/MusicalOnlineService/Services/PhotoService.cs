using MusicalOnlineService.Services.Interfaces;
using MusicalOnlineService.Models;
using Microsoft.AspNetCore.Hosting;
using System.IO;

namespace MusicalOnlineService.Services
{
    public class PhotoService : IPhotoService
    {
        private string _location;

        public PhotoService(IWebHostEnvironment appEnvironment)
        {
            var location = appEnvironment.WebRootPath;
            _location = location + @"\Performers\";
        }

        public void Create(PhotoFile photoFile)
        {
            string fileName;
            string filePath = _location + @$"{photoFile.PerformerName}\";

            if (photoFile.AlbumTitle == "")
            {
                fileName = $"{photoFile.PerformerName}.jpg";
            }
            else
            {
                fileName = $"{photoFile.AlbumTitle}.jpg";
                filePath +=  @$"{photoFile.AlbumTitle}\";
            }

            Directory.CreateDirectory(filePath);
            filePath += fileName;
            byte[] fileBytes = new byte[photoFile.File.Length];
            photoFile.File.Read(fileBytes, 0, (int)photoFile.File.Length);
            File.WriteAllBytes(filePath, fileBytes);
        }
    }
}
