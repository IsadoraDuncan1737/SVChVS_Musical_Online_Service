using System;
using System.Collections.Generic;

#nullable disable

namespace MusicalOnlineService.Models
{
    public partial class Album
    {
        public Album()
        {
            Tracks = new HashSet<Track>();
        }

        public string Id { get; set; }
        public string PerformerId { get; set; }
        public string Title { get; set; }
        public string Genres { get; set; }
        public int PlaysNumber { get; set; }
        public DateTime ReleaseDate { get; set; }

        public virtual Performer Performer { get; set; }
        public virtual ICollection<Track> Tracks { get; set; }
    }
}
