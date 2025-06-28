import { ResponsiveChoropleth } from '@nivo/geo'
import React from 'react'
import { data } from './data'
import { geo } from './world_countries'
import { Box, useTheme } from '@mui/material'

const Geo = ({isDashboard = false}) => {
        const theme = useTheme()
  return (
      <Box sx={{ height: isDashboard ?"400px": '75vh', border:isDashboard? '' :  `1px solid ${theme.palette.text.primary}` , borderRadius :'5px' }} >
                <ResponsiveChoropleth /* or Choropleth for fixed dimensions */
                    data={data}
                    features={geo.features}
                    margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                    colors="spectral"
                    domain={[0, 1000000]}
                    unknownColor="#666666"
                    label="properties.name"
                    valueFormat=".2s"
                    enableGraticule={false}
                    graticuleLineColor="#dddddd"
                    borderWidth={0.5}
                    borderColor="#152538"
                    projectionScale={100}
                    legends={
                        isDashboard ? [] :
                        [
                        {
                            anchor: 'bottom-left',
                            direction: 'column',
                            justify: true,
                            translateX: 20,
                            translateY: -50,
                            itemsSpacing: 0,
                            itemWidth: 94,
                            itemHeight: 18,
                            itemDirection: 'left-to-right',
                            itemTextColor: '#444444',
                            itemOpacity: 0.85,
                            symbolSize: 18
                        }
                    ]}
                    theme={{
                        "text": {
                            "fontSize": 11,
                            "fill": "#333333",
                            "outlineWidth": 0,
                            "outlineColor": "#ffffff"
                        },
                        "axis": {
                            "domain": {
                                "line": {
                                    "stroke": "#777777",
                                    "strokeWidth": 1
                                }
                            },
                            "legend": {
                                "text": {
                                    "fontSize": 12,
                                    "fill": theme.palette.text.secondary,
                                    "outlineWidth": 0,
                                    "outlineColor": "#ffffff"
                                }
                            },
                            "ticks": {
                                "line": {
                                    "stroke": "#777777",
                                    "strokeWidth": 1
                                },
                                "text": {
                                    "fontSize": 11,
                                    "fill": theme.palette.text.secondary,
                                    "outlineWidth": 0,
                                    "outlineColor": "#ffffff"
                                }
                            }
                        },
                        "grid": {
                            "line": {
                                "stroke": "#dddddd",
                                "strokeWidth": 1
                            }
                        },
                        "legends": {
                            "title": {
                                "text": {
                                    "fontSize": 11,
                                    "fill": theme.palette.text.secondary,
                                    "outlineWidth": 0,
                                    "outlineColor": "#ffffff"
                                }
                            },
                            "text": {
                                "fontSize": 11,
                                "fill": theme.palette.text.secondary,
                                "outlineWidth": 0,
                                "outlineColor": "#ffffff"
                            },
                            "ticks": {
                                "line": {},
                                "text": {
                                    "fontSize": 10,
                                    "fill": theme.palette.text.secondary,
                                    "outlineWidth": 0,
                                    "outlineColor": "#ffffff"
                                }
                            }
                        },
                        "annotations": {
                            "text": {
                                "fontSize": 13,
                                "fill": theme.palette.text.secondary,
                                "outlineWidth": 2,
                                "outlineColor": "#ffffff",
                                "outlineOpacity": 1
                            },
                            "link": {
                                "stroke": "#000000",
                                "strokeWidth": 1,
                                "outlineWidth": 2,
                                "outlineColor": "#ffffff",
                                "outlineOpacity": 1
                            },
                            "outline": {
                                "stroke": "#000000",
                                "strokeWidth": 2,
                                "outlineWidth": 2,
                                "outlineColor": "#ffffff",
                                "outlineOpacity": 1
                            },
                            "symbol": {
                                "fill": "#000000",
                                "outlineWidth": 2,
                                "outlineColor": "#ffffff",
                                "outlineOpacity": 1
                            }
                        },
                        "tooltip": {
                            "container": {
                                "background": "#ffffff",
                                "color": "#333333",
                                "fontSize": 12
                            },
                            "basic": {},
                            "chip": {},
                            "table": {},
                            "tableCell": {},
                            "tableCellValue": {}
                        }
                    }}
                />
            </Box>
  )
}

export default Geo