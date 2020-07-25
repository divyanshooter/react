import * as ActionTypes from './ActionTypes';
import { DISHES } from "../shared/dishes";
import {baseURl} from '../shared/baseURL';




//DISHES

export const fetchDishes=()=>(dispatch)=>{
    dispatch(dishesLoading());
    return fetch(baseURl+'dishes')
           .then(response=>{
               if(response.ok) {
                   return response;
               }
               else {
                   var error=new Error('Error' + response.status + ' : ' + response.statusText);
                   error.response=response;
                   throw error;
               }
           },error=>{
               var errmess=new Error(error.message);
               throw errmess;
           })
           .then(response=>response.json())
           .then(dishes=>dispatch(addDishes(dishes)))
           .catch(error=>dispatch(dishesFailed(error.message)));
};

export const dishesLoading=()=>({
    type:ActionTypes.DISHES_LOADING
});

export const dishesFailed=(error)=>({
    type:ActionTypes.DISHES_FAILED,
    payload:error
});

export const addDishes=(dishes)=>({
    type:ActionTypes.ADD_DISHES,
    payload:dishes
});

//COMMENTS
export const addComment=(dishId,rating,author,comment)=>({
    type:ActionTypes.ADD_COMMENT,
    payload:{
        dishId,
        rating,
        author,
        comment
    }
});

export const fetchComments=()=>(dispatch)=>{
    return fetch(baseURl+'comments')
            .then(response=>{
                if(response.ok) {
                    return response;
                }
                else {
                    var error=new Error('Error' + response.status + ' : ' + response.statusText);
                    error.response=response;
                    throw error;
                }
            },
            error=>{
                var errmess=new Error(error.message);
                throw errmess;
            })
           .then(response=>response.json())
           .then(comments=>dispatch(addComments(comments)))
           .catch(error=>dispatch(commentsFailed(error.message)));
};

export const commentsFailed=(error)=>({
    type:ActionTypes.COMMENTS_FAILED,
    payload:error
});

export const addComments=(comments)=>({
    type:ActionTypes.ADD_COMMENTS,
    payload:comments
});

//PROMOTIONS

export const fetchPromos=()=>(dispatch)=>{
    dispatch(promosLoading());
    return fetch(baseURl+'promotions')
            .then(response=>{
                if(response.ok) {
                    return response;
                }
                else {
                    var error=new Error('Error' + response.status + ' : ' + response.statusText);
                    error.response=response;
                    throw error;
                }
            },error=>{
                var errmess=new Error(error.message);
                throw errmess;
            })
           .then(response=>response.json())
           .then(promotions=>dispatch(addPromos(promotions)))
           .catch(error=>dispatch(promosFailed(error.message)));
};

export const promosLoading=()=>({
    type:ActionTypes.PROMOS_LOADING
});

export const promosFailed=(error)=>({
    type:ActionTypes.PROMOS_FAILED,
    payload:error
});

export const addPromos=(promotions)=>({
    type:ActionTypes.ADD_PROMOS,
    payload:promotions
});