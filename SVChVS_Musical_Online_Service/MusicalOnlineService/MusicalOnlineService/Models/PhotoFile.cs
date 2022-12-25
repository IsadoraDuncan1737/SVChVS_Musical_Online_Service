using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.IO;

namespace MusicalOnlineService.Models
{
    public class PhotoFile
    {
        public string PerformerName { get; set; }
        public string AlbumTitle { get; set; }
        public Stream File { get; set; }

        public PhotoFile() { }
    }
}
