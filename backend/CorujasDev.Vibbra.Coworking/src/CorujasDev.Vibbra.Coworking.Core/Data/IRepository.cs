using System;
using System.Collections.Generic;
using CorujasDev.Vibbra.Coworking.Core.Data;

namespace CorujasDev.Vibbra.Coworking.Core
{
    public interface IRepository<T> : IDisposable where T : class
    {
        IEnumerable<T> GetAll();
        T GetById(Guid id);
        void Add(T obj);
        void Update(T obj);
        void Delete(Guid id);
        IUnitOfWork UnitOfWork { get; }
    }
}
