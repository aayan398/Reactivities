using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace Application.Core
{
    public class Result<T>
    {
        public bool IsSuccess { get; set;}

        public T Value { get; set;}

        public string Error { get; set;}

        public static Result<T>  Success(T value) => new Result<T> {IsSuccess = true, Value = value};
        public static Result<T> Failure(string error) => new Result<T> {IsSuccess = false, Error = error};

        internal static Result<List<Activity>> Success(object value)
        {
            throw new NotImplementedException();
        }
    }
}