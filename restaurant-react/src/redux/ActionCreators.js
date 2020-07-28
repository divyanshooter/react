import * as ActionTypes from './ActionTypes';
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


//COMMENT
export const addComment=(comment)=>({
    type:ActionTypes.ADD_COMMENT,
    payload:comment
});

export const postComment=(dishId,rating,author,comment)=>dispatch=>{
    const newComment={
        dishId,
        rating,
        author,
        comment
    }
    newComment.date=new Date().toISOString();
    return fetch(baseURl +'comments',{
        method:'POST',
        body:JSON.stringify(newComment),
        headers:{
            'Content-Type':'application/json'
        },
        credentials:'same-origin'
    })
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
   .then(comment=>dispatch(addComment(comment)))
   .catch(error=>{
       console.log('Post comment ', error.message);
       alert('Your comment could not be posted\nError: '+ error.message);
   })


}


//COMMENTS


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


//LEADERS

export const fetchLeaders=()=>(dispatch)=>{
    dispatch(leadersLoading());
    return fetch(baseURl+'leaders')
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
           .then(promotions=>dispatch(addLeaders(promotions)))
           .catch(error=>dispatch(leadersFailed(error.message)));
};

export const leadersLoading=()=>({
    type:ActionTypes.LEADERS_LOADING
});

export const leadersFailed=(error)=>({
    type:ActionTypes.LEADERS_FAILED,
    payload:error
});

export const addLeaders=(leaders)=>({
    type:ActionTypes.ADD_LEADERS,
    payload:leaders
});


// Feedback Form 
export const postFeedback=(values)=>dispatch=>{
    return fetch(baseURl +'feedback',{
        method:'POST',
        body:JSON.stringify(values),
        headers:{
            'Content-Type':'application/json'
        },
        credentials:'same-origin'
    })
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
   .then(feedback=>{
       alert("Thank you for the feedback!\n"+JSON.stringify( feedback))
    })
   .catch(error=>{
       console.log('Feedback Form ', error.message);
       alert('Your form could not be sumbitted\nError: '+ error.message);
   });
}

