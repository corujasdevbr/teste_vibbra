using CorujasDev.Vibbra.Coworking.Domain.Interfaces;
using CorujasDev.Vibbra.Coworking.Domain.Models;
using CorujasDev.Vibbra.Coworking.Infra.Data.Context;
using Microsoft.EntityFrameworkCore;

namespace CorujasDev.Vibbra.Coworking.Infra.Data.Repository
{
    public class PlaceRepository : Repository<Place>, IPlaceRepository
    {
        public PlaceRepository(CoworkingContext context) : base(context)
        {
        }

        public override void Update(Place obj)
        {
            var objUpdate = _context.Set<Place>().Find(obj.Id);
            if (objUpdate != null)
            {
                _context.Entry(objUpdate).State = EntityState.Detached;
            }

            _context.Entry(obj).State = EntityState.Modified;
        }
    }
}
