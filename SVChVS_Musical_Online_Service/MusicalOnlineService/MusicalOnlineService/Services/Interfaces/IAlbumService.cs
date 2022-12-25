using MusicalOnlineService.Models;
using System;
using System.Collections.Generic;

namespace MusicalOnlineService.Services.Interfaces
{
    public interface IAlbumService : IServiceBase<Album>
    {
        List<Album> GetAlbumsByGenres(string genres);
        List<Album> GetAlbumsRange(int range);
        Album GetAlbumByTrackID(string id);
        List<Album> GetAlbumsByPerformerID(string id);
        Album GetAlbumByTitle(string name);
    }
}
