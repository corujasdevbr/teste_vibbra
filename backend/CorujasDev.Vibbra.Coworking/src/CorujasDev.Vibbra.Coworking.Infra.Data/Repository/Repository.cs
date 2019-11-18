using System;
using System.Collections.Generic;
using System.Linq;
using CorujasDev.Vibbra.Coworking.Core;
using CorujasDev.Vibbra.Coworking.Core.Data;
using CorujasDev.Vibbra.Coworking.Core.DomainObjects;
using CorujasDev.Vibbra.Coworking.Infra.Data.Context;
using Microsoft.EntityFrameworkCore;

namespace CorujasDev.Vibbra.Coworking.Infra.Data.Repository
{
    public abstract class Repository<T> : IRepository<T> where T : Entity
    {
        protected readonly CoworkingContext _context;
        protected DbSet<T> _dbSet;

        public Repository(CoworkingContext context)
        {
            _context = context;
            _dbSet = _context.Set<T>();
        }

        public IUnitOfWork UnitOfWork => _context;

        public virtual IEnumerable<T> GetAll()
        {
            return _context.Set<T>().AsNoTracking().ToList();
        }

        public virtual T GetById(Guid id)
        {
            return _context.Set<T>().AsNoTracking().FirstOrDefault(x => x.Id == id);
        }

        public virtual void Add(T obj)
        {
            _context.Set<T>().Add(obj);
        }

        public virtual void Delete(Guid id)
        {
            var obj = GetById((id));

            _context.Set<T>().Remove(obj);
        }

        public virtual void Update(T obj)
        {
            _context.Set<T>().Update(obj);
        }

        public void Dispose()
        {
            _context?.Dispose();
        }
    }
}
