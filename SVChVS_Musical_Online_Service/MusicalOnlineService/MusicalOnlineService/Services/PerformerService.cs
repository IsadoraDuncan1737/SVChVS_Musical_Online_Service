using MusicalOnlineService.Services.Interfaces;
using MusicalOnlineService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MusicalOnlineService.Services
{
    public class PerformerService : IPerformerService
    {
        private readonly MusicalOnlineServiceContext _context;

        public PerformerService(MusicalOnlineServiceContext context)
        {
            this._context = context;
        }

        public List<Performer> GetPerformersByGenres(string genres)
        {
            return _context.Performers.Where(_ => _.Genres == genres).ToList();
        }

        public Performer GetPerformerByAlbumID(string id)
        {
            Album album = _context.Albums.FirstOrDefault(_ => _.Id == id);

            return _context.Performers.FirstOrDefault(_ => _.Id == album.PerformerId);
        }

        public Performer GetPerformerByTrackID(string id)
        {
            Track track = _context.Tracks.FirstOrDefault(_ => _.Id == id);

            return _context.Performers.FirstOrDefault(_ => _.Id == track.PerformerId);
        }

        public Performer GetPerformerByName(string name)
        {
            return _context.Performers.FirstOrDefault(_ => _.Name == name);
        }

        public List<Performer> GetAll()
        {
            return _context.Performers.ToList();
        }

        public Performer Get(string id)
        {
            return _context.Performers.FirstOrDefault(_ => _.Id == id);
        }

        public Performer Create(Performer entity)
        {
            entity.Id = Guid.NewGuid().ToString();
            var resultEntity = _context.Add(entity).Entity;
            _context.SaveChanges();

            return resultEntity;
        }

        public Performer Update(Performer entity)
        {
            var resultEntity = _context.Performers.Update(entity).Entity;
            _context.SaveChanges();

            return resultEntity;
        }

        public Performer Remove(Performer entity)
        {
            var resultEntity = _context.Performers.Remove(entity).Entity;
            _context.SaveChanges();

            return resultEntity;
        }
    }
}
