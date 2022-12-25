using MusicalOnlineService.Models;
using System;
using System.Collections.Generic;

namespace MusicalOnlineService.Services.Interfaces
{
    public interface IPerformerService : IServiceBase<Performer>
    {
        List<Performer> GetPerformersByGenres(string genres);
        Performer GetPerformerByAlbumID(string id);
        Performer GetPerformerByTrackID(string id);
        Performer GetPerformerByName(string name);
    }
}
