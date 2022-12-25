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

        public List<Performer> GetPerformersRange(int range)
        {
            var resultList = new List<Performer>();

            if (range > _context.Performers.Count())
            {
                range = _context.Performers.Count();
            }

            for (int i = 0; i < range; i++)
            {
                resultList.Add(_context.Performers.ToList().ElementAt(i));
            }

            return resultList;
        }

        public List<Performer> GetPerformersByGenres(string genres)
        {
            return _context.Performers.Where(_ => _.Genres == genres).ToList();
        }

        public Performer GetPerformerByAlbumID(string id)
        {
            return _context.Performers.FirstOrDefault(_ => _.Albums.FirstOrDefault(_=> _.Id == id) != default(Album));
        }

        public Performer GetPerformerByTrackID(string id)
        {
            Track track = _context.Tracks.FirstOrDefault(_ => _.Id == id);

            return _context.Performers.FirstOrDefault(_ => _.Id == track.Id);
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
            if (_context.Performers.FirstOrDefault(_ => _.Name == entity.Name) == default(Performer))
            {
                entity.Id = Guid.NewGuid().ToString();
                var resultEntity = _context.Add(entity).Entity;
                _context.SaveChanges();

                return resultEntity;
            }

            return default(Performer);
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
