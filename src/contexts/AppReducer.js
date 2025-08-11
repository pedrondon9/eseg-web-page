import React, { useContext, useState } from 'react'
import { DATA_EVENT_CLICK,ID_VIDEOS } from './constantesVar'




const AppReducer = (state, action) => {
    const { payload, type } = action;

    switch (type) {
        //Id Video
        case ID_VIDEOS :
            return {
                ...state,
                IdVideo:payload,
            };
        //GUARDAR DATOS DEL EVENTO QUE SE HA HECHO EL CLICK
        case DATA_EVENT_CLICK:
            return {
                ...state,
                dataEvent: payload,
            };

        default:
            return state;
    }

}

export default AppReducer