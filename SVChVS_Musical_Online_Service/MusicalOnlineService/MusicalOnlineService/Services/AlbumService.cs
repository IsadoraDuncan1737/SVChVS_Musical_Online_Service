using MusicalOnlineService.Services.Interfaces;
using MusicalOnlineService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MusicalOnlineService.Services
{
    public class AlbumService : IAlbumService
    {
        private readonly MusicalOnlineServiceContext _context;

        public AlbumService(MusicalOnlineServiceContext context)
        {
            this._context = context;
        }

        public List<Album> GetAlbumsByGenres(string genres)
        {
            return _context.Albums.Where(_ => _.Genres == genres).ToList();
        }

        public List<Album> GetAlbumsByPerformerID(string id)
        {
            return _context.Albums.Where(_ => _.PerformerId == id).ToList();
        }

        public Album GetAlbumByTrackID(string id)
        {
            Track track = _context.Tracks.FirstOrDefault(_ => _.Id == id);

            return _context.Albums.FirstOrDefault(_ => _.Id == track.AlbumId);
        }

        public Album GetAlbumByTitle(string title)
        {
            return _context.Albums.FirstOrDefault(_ => _.Title == title);
        }

        public List<Album> GetAll()
        {
            return _context.Albums.ToList();
        }

        public Album Get(string id)
        {
            return _context.Albums.FirstOrDefault(_ => _.Id == id);
        }

        public Album Create(Album entity)
        {
            entity.Id = Guid.NewGuid().ToString();
            var resultEntity = _context.Add(entity).Entity;
            _context.SaveChanges();

            return resultEntity;
        }

        public Album Update(Album entity)
        {
            var resultEntity = _context.Albums.Update(entity).Entity;
            _context.SaveChanges();

            return resultEntity;
        }

        public Album Remove(Album entity)
        {
            var resultEntity = _context.Albums.Remove(entity).Entity;
            _context.SaveChanges();

            return resultEntity;
        }
    }
}
