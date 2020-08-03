<template>
	<div>

		<div>
			<h1>demo1</h1>
			<pivot 
				:data="data" 
				:fields="fields" 
				:row-field-keys="rowFieldKeys" 
				:col-field-keys="colFieldKeys" 
				:reducer="reducer">
			</pivot>
		</div>

	</div>
</template>

<script>
import Pivot from '@marketconnect/vue-pivot-table'
export default {
	name:'pivottable',
	components:{Pivot},
	data() {
		return {
			data: Object.freeze([{ x: '0x', y: '0y', z: '0z' }, { x: '1x', y: '1y', z: '1z' }]),
			fields: [{
				key: 'x',
				getter: item => {
					return item.x
				},
				label: 'X'
			}, {
				key: 'y',
				getter: item => {
					return item.y
				},
				label: 'Y'
			}, {
				key: 'z',
				getter: item => {
					return item.z
				},
				label: 'Z'
			}],
			rowFieldKeys: ['y', 'z'],
			colFieldKeys: ['x'],
			reducer: (sum, item) => {
				console.log(sum,item);
				return sum+1
			}
		}
	},
}
</script>

<style>

</style>
