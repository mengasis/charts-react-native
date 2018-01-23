import React from 'react'
import { AppRegistry, StyleSheet, Text, View, processColor } from 'react-native'
import update from 'immutability-helper'

import _ from 'lodash'
import { LineChart } from 'react-native-charts-wrapper'

const COLOR_PURPLE = processColor('#697dfb')

import data from '../utils/data'

class LineChartOne extends React.Component {
	constructor() {
		super()

		this.state = {
			data: {},
			xAxis: {},
			yAxis: {}
		}
	}

	componentDidMount() {
		this.setState(
			update(this.state, {
				xAxis: {
					$set: {
						textColor: processColor('red'),
						textSize: 5,
						gridColor: processColor('red'),
						gridLineWidth: 1,
						axisLineColor: processColor('darkgray'),
						axisLineWidth: 1.5,
						gridDashedLine: {
							lineLength: 10,
							spaceLength: 10
						},
						avoidFirstLastClipping: true,
						position: 'BOTTOM',
						valueFormatter: data.map(item => item.date)
					}
				},
				yAxis: {
					$set: {
						left: {
							drawGridLines: false
						},
						right: {
							enabled: false
						}
					}
				},
				data: {
					$set: {
						dataSets: [
							{
								values: data.map(item => item.value),
								label: '',
								config: {
									lineWidth: 1.5,
									drawCircles: false,
									drawCubicIntensity: 0.3,
									drawCubic: true,
									drawHighlightIndicators: false,
									color: COLOR_PURPLE,
									drawFilled: true,
									fillColor: COLOR_PURPLE,
									fillAlpha: 90
								}
							}
						]
					}
				}
			})
		)
	}

	handleSelect(event) {
		let entry = event.nativeEvent
		if (entry == null) {
			this.setState({ ...this.state, selectedEntry: null })
		} else {
			this.setState({
				...this.state,
				selectedEntry: JSON.stringify(entry)
			})
		}

		console.log(event.nativeEvent)
	}

	render() {
		return (
			<View style={{ flex: 1 }}>
				<View style={{ height: 80 }}>
					<Text> selected entry</Text>
					<Text> {this.state.selectedEntry}</Text>
				</View>

				<View style={styles.container}>
					<LineChart
						style={styles.chart}
						data={this.state.data}
						chartDescription={{ text: '' }}
						xAxis={this.state.xAxis}
						yAxis={this.state.yAxis}
						legend={{ enabled: false }}
						onSelect={this.handleSelect.bind(this)}
						onChange={event => console.log(event.nativeEvent)}
					/>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F5FCFF'
	},
	chart: {
		flex: 1,
		margin: 15
	}
})

export default LineChartOne
