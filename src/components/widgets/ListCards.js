import React from 'react'
import { View, Text, FlatList } from 'react-native'
import listCards from '../../datas/list-cards'

export default function ListCards() {
    return (
        <FlatList data={listCards} renderItem={item => (
            <View>
                <Text style={{
                    color: 'black'
                }}>{item.nameBank}</Text>
            </View>
        )} horizontal={true} />
    )
}

function BuildCard() {

}
