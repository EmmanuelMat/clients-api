export interface IRequestHandler<TRequest, TResponse> {
    task(request: TRequest): TResponse
}