using System;
using System.Collections.Generic;
using AutoMapper;
using CorujasDev.Vibbra.Coworking.Application.Interfaces;
using CorujasDev.Vibbra.Coworking.Application.ViewModel.Place;
using CorujasDev.Vibbra.Coworking.Domain.Interfaces;
using CorujasDev.Vibbra.Coworking.Domain.Models;

namespace CorujasDev.Vibbra.Coworking.Application.Services
{
    public class PlaceService : IPlaceService
    {
        private readonly IPlaceRepository _placeRepository;
        private readonly IMapper _mapper;

        public PlaceService(IPlaceRepository placeRepository, IMapper mapper)
        {
            _placeRepository = placeRepository;
            _mapper = mapper;
        }

        public void Add(CreatePlaceViewModel obj)
        {
            _placeRepository.Add(_mapper.Map<Place>(obj));
            _placeRepository.UnitOfWork.Commit();
        }

        public void Delete(Guid id)
        {
            var place = GetById(id);

            if (place == null)
                throw new Exception("Local não encontrado");

            _placeRepository.Delete(id);

            _placeRepository.UnitOfWork.Commit();
        }

        public IEnumerable<PlaceViewModel> GetAll()
        {
            return _mapper.Map<IEnumerable<PlaceViewModel>>(_placeRepository.GetAll());

        }

        public PlaceViewModel GetById(Guid id)
        {
            return _mapper.Map<PlaceViewModel>(_placeRepository.GetById(id));

        }

        public void Update(UpdatePlaceViewModel obj)
        {
            _placeRepository.Update(_mapper.Map<Place>(obj));
            _placeRepository.UnitOfWork.Commit();
        }

        public void Dispose()
        {
            _placeRepository?.Dispose();
        }
    }
}
