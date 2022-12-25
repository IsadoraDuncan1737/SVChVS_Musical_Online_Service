using Microsoft.Extensions.DependencyInjection;
using MusicalOnlineService.Services;
using MusicalOnlineService.Services.Interfaces;

namespace MusicalOnlineService.Services
{
    public static class ServicesDependencyRegistrator
    {
        public static void RegistrateServiceDependencies(this IServiceCollection serviceCollection)
        {
            serviceCollection.AddScoped<IPerformerService, PerformerService>();
            serviceCollection.AddScoped<ITrackService, TrackService>();
            serviceCollection.AddScoped<IAlbumService, AlbumService>();
            serviceCollection.AddScoped<IAudioService, AudioService>();
            serviceCollection.AddScoped<IPhotoService, PhotoService>();
        }
    }
}
