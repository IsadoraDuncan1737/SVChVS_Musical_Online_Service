using MusicalOnlineService.Services.Interfaces;
using MusicalOnlineService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MusicalOnlineService.Services
{
    public class TrackService : ITrackService
    {
        private readonly MusicalOnlineServiceContext _context;

        public TrackService(MusicalOnlineServiceContext context)
        {
            this._context = context;
        }

        public List<Track> GetTracksByGenres(string genres)
        {
            return _context.Tracks.Where(_ => _.Genres == genres).ToList();
        }

        public List<Track> GetTracksByPerformerID(string id)
        {
            return _context.Tracks.Where(_ => _.PerformerId == id).ToList();
        }

        public List<Track> GetTracksByAlbumID(string id)
        { 
            return _context.Tracks.Where(_ => _.AlbumId == id).ToList();
        }

        public Track GetTrackByTitle(string title)
        {
            return _context.Tracks.FirstOrDefault(_ => _.Title == title);
        }

        public List<Track> GetAll()
        {
            return _context.Tracks.ToList();
        }

        public Track Get(string id)
        {
            return _context.Tracks.FirstOrDefault(_ => _.Id == id);
        }

        public Track Create(Track entity)
        {
            entity.Id = Guid.NewGuid().ToString();
            var resultEntity = _context.Add(entity).Entity;
            _context.SaveChanges();

            return resultEntity;
        }

        public Track Update(Track entity)
        {
            var resultEntity = _context.Tracks.Update(entity).Entity;
            _context.SaveChanges();

            return resultEntity;
        }

        public Track Remove(Track entity)
        {
            var resultEntity = _context.Tracks.Remove(entity).Entity;
            _context.SaveChanges();

            return resultEntity;
        }
    }
}
