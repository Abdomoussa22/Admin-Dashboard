import React from 'react'
import { Box, useTheme } from '@mui/material'
import { ResponsiveLine } from '@nivo/line'
const data = [
    {
        "id": "japan",
        "data": [
            {
                "x": "plane",
                "y": 68
            },
            {
                "x": "helicopter",
                "y": 288
            },
            {
                "x": "boat",
                "y": 191
            },
            {
                "x": "train",
                "y": 174
            },
            {
                "x": "subway",
                "y": 41
            },
            {
                "x": "bus",
                "y": 210
            },
            {
                "x": "car",
                "y": 130
            },
            {
                "x": "moto",
                "y": 34
            },
            {
                "x": "bicycle",
                "y": 298
            },
            {
                "x": "horse",
                "y": 43
            },
            {
                "x": "skateboard",
                "y": 258
            },
            {
                "x": "others",
                "y": 201
            }
        ]
    },
    {
        "id": "france",
        "data": [
            {
                "x": "plane",
                "y": 145
            },
            {
                "x": "helicopter",
                "y": 65
            },
            {
                "x": "boat",
                "y": 14
            },
            {
                "x": "train",
                "y": 200
            },
            {
                "x": "subway",
                "y": 232
            },
            {
                "x": "bus",
                "y": 230
            },
            {
                "x": "car",
                "y": 269
            },
            {
                "x": "moto",
                "y": 40
            },
            {
                "x": "bicycle",
                "y": 242
            },
            {
                "x": "horse",
                "y": 137
            },
            {
                "x": "skateboard",
                "y": 225
            },
            {
                "x": "others",
                "y": 247
            }
        ]
    },
    {
        "id": "us",
        "data": [
            {
                "x": "plane",
                "y": 149
            },
            {
                "x": "helicopter",
                "y": 86
            },
            {
                "x": "boat",
                "y": 204
            },
            {
                "x": "train",
                "y": 248
            },
            {
                "x": "subway",
                "y": 12
            },
            {
                "x": "bus",
                "y": 64
            },
            {
                "x": "car",
                "y": 89
            },
            {
                "x": "moto",
                "y": 229
            },
            {
                "x": "bicycle",
                "y": 247
            },
            {
                "x": "horse",
                "y": 72
            },
            {
                "x": "skateboard",
                "y": 245
            },
            {
                "x": "others",
                "y": 259
            }
        ]
    },
    {
        "id": "germany",
        "data": [
            {
                "x": "plane",
                "y": 129
            },
            {
                "x": "helicopter",
                "y": 83
            },
            {
                "x": "boat",
                "y": 12
            },
            {
                "x": "train",
                "y": 9
            },
            {
                "x": "subway",
                "y": 208
            },
            {
                "x": "bus",
                "y": 49
            },
            {
                "x": "car",
                "y": 69
            },
            {
                "x": "moto",
                "y": 32
            },
            {
                "x": "bicycle",
                "y": 84
            },
            {
                "x": "horse",
                "y": 256
            },
            {
                "x": "skateboard",
                "y": 176
            },
            {
                "x": "others",
                "y": 19
            }
        ]
    },
    {
        "id": "norway",
        "data": [
            {
                "x": "plane",
                "y": 185
            },
            {
                "x": "helicopter",
                "y": 169
            },
            {
                "x": "boat",
                "y": 176
            },
            {
                "x": "train",
                "y": 153
            },
            {
                "x": "subway",
                "y": 210
            },
            {
                "x": "bus",
                "y": 285
            },
            {
                "x": "car",
                "y": 184
            },
            {
                "x": "moto",
                "y": 203
            },
            {
                "x": "bicycle",
                "y": 131
            },
            {
                "x": "horse",
                "y": 153
            },
            {
                "x": "skateboard",
                "y": 250
            },
            {
                "x": "others",
                "y": 181
            }
        ]
    }
]
const Line = ({isDashboard = false}) => {
       const theme = useTheme()
  return (
    <Box sx={{height : isDashboard ? '280px' : '75vh'}}>
             <ResponsiveLine /* or Line for fixed dimensions */
                data={data}
                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
                curve="natural"
                axisBottom={{ legend: 'transportation', legendOffset: 36 }}
                axisLeft={{ legend: 'count', legendOffset: -40 }}
                colors={{ scheme: 'paired' }}
                pointSize={10}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'seriesColor' }}
                pointLabelYOffset={-12}
                enableTouchCrosshair={true}
                useMesh={true}
                legends={[
                    {
                        anchor: 'bottom-right',
                        direction: 'column',
                        translateX: 100,
                        itemWidth: 80,
                        itemHeight: 22,
                        symbolShape: 'circle'
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
                            "strokeWidth": 0
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

export default Line