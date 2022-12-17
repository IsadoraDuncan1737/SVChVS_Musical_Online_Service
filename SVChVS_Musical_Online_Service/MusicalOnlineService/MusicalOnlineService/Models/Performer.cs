using System;
using System.Collections.Generic;

#nullable disable

namespace MusicalOnlineService.Models
{
    public partial class Performer
    {
        public Performer()
        {
            Albums = new HashSet<Album>();
            Tracks = new HashSet<Track>();
        }

        public string Id { get; set; }
        public string Name { get; set; }
        public DateTime CareerStartDate { get; set; }
        public DateTime? CareerEndDate { get; set; }
        public string Genres { get; set; }

        public virtual ICollection<Album> Albums { get; set; }
        public virtual ICollection<Track> Tracks { get; set; }
    }
}
