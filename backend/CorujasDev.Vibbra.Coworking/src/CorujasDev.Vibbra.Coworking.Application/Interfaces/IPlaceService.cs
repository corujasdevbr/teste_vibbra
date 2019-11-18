using System;
using System.Collections.Generic;
using CorujasDev.Vibbra.Coworking.Application.ViewModel.Place;

namespace CorujasDev.Vibbra.Coworking.Application.Interfaces
{
    public interface IPlaceService : IDisposable
    {
        IEnumerable<PlaceViewModel> GetAll();
        PlaceViewModel GetById(Guid id);
        void Add(CreatePlaceViewModel obj);
        void Update(UpdatePlaceViewModel obj);
        void Delete(Guid id);
    }
}
