using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MusicalOnlineService.Services.Interfaces
{
    public interface IServiceBase<T> where T : class
    {
        List<T> GetAll();
        T Get(string id);
        T Create(T entity);
        T Update(T entity);
        T Remove(T entity);
    }
}
