using MusicalOnlineService.Models;
using System;
using System.Collections.Generic;

namespace MusicalOnlineService.Services.Interfaces
{
    public interface ITrackService : IServiceBase<Track>
    {
        List<Track> GetTracksByGenres(string genres);
        List<Track> GetTracksByReleaseDate(DateTime releaseDate);
        List<Track> GetTracksByPlaysNumber(int playsNumber);
        List<Track> GetTracksByAlbumID(string id);
        List<Track> GetTracksByPerformerID(string id);
        Track GetTrackByTitle(string name);
    }
}
