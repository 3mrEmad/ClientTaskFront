
export interface Pagination{
 
    TotalCount:number,
    PageSize:number,
    CurrentPage:number
    TotalPages:number


    
}

export class PaginatedResult<T>{
    result: T;
    paginatiosn:Pagination; 
}