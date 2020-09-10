import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import notfound from './pages/notFound'
import register from './pages/register'
import adultMeme from './pages/adultMeme'
import remove from './pages/delete'
import change from './pages/change'
import home from './pages/home'


export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact={true} component={home}/>
                <Route path='/Meme' component={adultMeme}/>
                <Route path='/register' component={register}/>
                <Route path='/change' component={change}/>
                <Route path='/delete' component={remove}/>
                <Route path='*' component={notfound}/>
            </Switch>
        </BrowserRouter>
    )
}