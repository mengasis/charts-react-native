import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import LineChartOne from './components/LineChartOne'

export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>Line Chart</Text>
				<LineChartOne />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F5FCFF'
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10
	}
})
