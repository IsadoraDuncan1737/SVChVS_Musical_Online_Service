using MusicalOnlineService.Models;
using System;
using System.Collections.Generic;

namespace MusicalOnlineService.Services.Interfaces
{
    public interface IAlbumService : IServiceBase<Album>
    {
        List<Album> GetAlbumsByGenres(string genres);
        List<Album> GetAlbumsByReleaseDate(DateTime releaseDate);
        List<Album> GetAlbumsByPlaysNumber(int playsNumber);
        Album GetAlbumByTrackID(string id);
        List<Album> GetAlbumsByPerformerID(string id);
        Album GetAlbumByTitle(string name);
    }
}
