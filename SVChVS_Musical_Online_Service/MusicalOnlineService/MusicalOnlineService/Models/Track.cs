using System;
using System.Collections.Generic;

#nullable disable

namespace MusicalOnlineService.Models
{
    public partial class Track
    {
        public string Id { get; set; }
        public string PerformerId { get; set; }
        public string AlbumId { get; set; }
        public string Title { get; set; }
        public string Genres { get; set; }
        public DateTime ReleaseDate { get; set; }
        public int PlaysNumber { get; set; }
        public string PerformerName { get; set; }
        public string AlbumTitle { get; set; }

        public virtual Album Album { get; set; }
        public virtual Performer Performer { get; set; }
    }
}
