import {ItemCard } from "./ItemCard"

export const ItemList = ({items}) => 
items.map(botella => {return <ItemCard key={botella.id} item={botella}/>})