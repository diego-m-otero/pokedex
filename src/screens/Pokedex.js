import { SafeAreaView, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { getPokemonsApi, getPokemonDetailsByUrlApi } from '../api/pokemon'

export default function Pokedex() {

  const [ pokemons, setPokemos ] = useState([]) 

  useEffect(() => {
    (async () => {
      await loadPokemons()
    })()
  }, [])

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi()
      const pokemonsArray = []

      for await (const pokemon of response.result){
        const pokemonDetail = await getPokemonDetailsByUrlApi(pokemon.url)
        console.log(pokemon)
        console.log(pokemonDetail)
      }

      setPokemos(pokemonsArray)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <SafeAreaView>
      <Text>Pokedex</Text>
    </SafeAreaView>
  )
}