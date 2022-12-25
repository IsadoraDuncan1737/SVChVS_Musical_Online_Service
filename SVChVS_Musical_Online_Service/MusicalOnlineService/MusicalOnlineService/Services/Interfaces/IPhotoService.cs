using MusicalOnlineService.Models;
using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace MusicalOnlineService.Services.Interfaces
{
    public interface IPhotoService
    {
        public void Create(PhotoFile photoFile);
    }
}
