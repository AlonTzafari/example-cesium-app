import {Camera, Viewer} from 'resium'
import {CesiumTerrainProvider, Cartesian3} from 'cesium'

const terrainProvider = CesiumTerrainProvider.fromUrl('http://localhost:8080')

const pos = Cartesian3.fromDegrees(35.22460211127577,31.562289689659735,1000)
const direction = Cartesian3.fromDegrees(35.22460211127577,31.6, 100)
export default function Map() {
  return (
    <Viewer 
    style={{height: '100%'}}
    terrainProvider={terrainProvider} 
    creditContainer={document.createElement('div')} 
    homeButton={false}
    animation={false}
    timeline={false}
    navigationHelpButton={false}
    geocoder={false}
    scene3DOnly={true}
    baseLayerPicker={false}
    fullscreenButton={false}
    >
        <Camera position={pos} 
        up={Cartesian3.subtract(pos, new Cartesian3(0,0,0), new Cartesian3(0,0,0))}
        direction={Cartesian3.subtract(direction, pos, new Cartesian3(0,0,0))}/>
    </Viewer>
  )
}
