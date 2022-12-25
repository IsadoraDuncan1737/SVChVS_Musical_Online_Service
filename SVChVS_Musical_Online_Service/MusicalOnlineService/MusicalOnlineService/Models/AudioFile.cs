using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace MusicalOnlineService.Models
{
    public class AudioFile
    {
        public string PerformerName { get; set; }
        public string TrackTitle { get; set; }
        public string AlbumTitle { get; set; }
        public Stream File { get; set; }

        public AudioFile() { }
    }
}
