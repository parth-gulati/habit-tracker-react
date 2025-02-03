import { ResponsiveTimeRange } from '@nivo/calendar'


const data2 = [
    {
      "value": 305,
      "day": "2018-05-30"
    },
    {
      "value": 239,
      "day": "2018-06-06"
    },
    {
      "value": 242,
      "day": "2018-05-01"
    },
    {
      "value": 149,
      "day": "2018-04-18"
    },
    {
      "value": 272,
      "day": "2018-05-10"
    },
    {
      "value": 93,
      "day": "2018-06-02"
    },
    {
      "value": 90,
      "day": "2018-04-16"
    },
    {
      "value": 344,
      "day": "2018-05-27"
    },
    {
      "value": 219,
      "day": "2018-05-21"
    },
    {
      "value": 368,
      "day": "2018-08-05"
    },
    {
      "value": 288,
      "day": "2018-06-13"
    },
    {
      "value": 1,
      "day": "2018-06-23"
    },
    {
      "value": 127,
      "day": "2018-08-11"
    },
    {
      "value": 317,
      "day": "2018-07-20"
    },
    {
      "value": 280,
      "day": "2018-04-29"
    },
    {
      "value": 31,
      "day": "2018-04-01"
    },
    {
      "value": 42,
      "day": "2018-04-03"
    },
    {
      "value": 295,
      "day": "2018-06-17"
    },
    {
      "value": 233,
      "day": "2018-06-21"
    },
    {
      "value": 210,
      "day": "2018-07-09"
    },
    {
      "value": 23,
      "day": "2018-04-06"
    },
    {
      "value": 116,
      "day": "2018-07-02"
    },
    {
      "value": 22,
      "day": "2018-04-24"
    },
    {
      "value": 311,
      "day": "2018-05-22"
    },
    {
      "value": 145,
      "day": "2018-08-10"
    },
    {
      "value": 376,
      "day": "2018-05-13"
    },
    {
      "value": 31,
      "day": "2018-07-23"
    },
    {
      "value": 39,
      "day": "2018-07-04"
    },
    {
      "value": 144,
      "day": "2018-04-15"
    },
    {
      "value": 95,
      "day": "2018-08-09"
    },
    {
      "value": 231,
      "day": "2018-06-18"
    },
    {
      "value": 85,
      "day": "2018-07-08"
    },
    {
      "value": 247,
      "day": "2018-07-12"
    },
    {
      "value": 132,
      "day": "2018-06-28"
    },
    {
      "value": 391,
      "day": "2018-05-17"
    },
    {
      "value": 213,
      "day": "2018-05-15"
    },
    {
      "value": 246,
      "day": "2018-07-17"
    },
    {
      "value": 173,
      "day": "2018-08-08"
    },
    {
      "value": 284,
      "day": "2018-05-31"
    },
    {
      "value": 210,
      "day": "2018-06-24"
    },
    {
      "value": 202,
      "day": "2018-05-04"
    },
    {
      "value": 387,
      "day": "2018-06-11"
    },
    {
      "value": 48,
      "day": "2018-06-07"
    },
    {
      "value": 35,
      "day": "2018-06-26"
    },
    {
      "value": 357,
      "day": "2018-04-04"
    },
    {
      "value": 285,
      "day": "2018-05-16"
    },
    {
      "value": 370,
      "day": "2018-05-23"
    },
    {
      "value": 203,
      "day": "2018-04-09"
    },
    {
      "value": 35,
      "day": "2018-04-19"
    },
    {
      "value": 10,
      "day": "2018-05-06"
    },
    {
      "value": 288,
      "day": "2018-07-15"
    },
    {
      "value": 70,
      "day": "2018-07-18"
    },
    {
      "value": 92,
      "day": "2018-04-10"
    },
    {
      "value": 235,
      "day": "2018-04-17"
    },
    {
      "value": 109,
      "day": "2018-04-21"
    },
    {
      "value": 241,
      "day": "2018-04-14"
    },
    {
      "value": 185,
      "day": "2018-08-04"
    }
]

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveTimeRange = ({ data=data2 /* see data tab */ }) => (
    <ResponsiveTimeRange
    theme={{
        "background": "rgba(0,0,0,0)",
        "text": {
            "fontSize": 11,
            "fill": "#ffffff",
            "outlineWidth": 0,
            "outlineColor": "transparent"
        },
        "axis": {
            "domain": {
                "line": {
                    "stroke": "#ffffff",
                    "strokeWidth": 1
                }
            },
            "legend": {
                "text": {
                    "fontSize": 12,
                    "fill": "#ffffff",
                    "outlineWidth": 0,
                    "outlineColor": "transparent"
                }
            },
            "ticks": {
                "line": {
                    "stroke": "#777777",
                    "strokeWidth": 1
                },
                "text": {
                    "fontSize": 11,
                    "fill": "#ffffff",
                    "outlineWidth": 0,
                    "outlineColor": "transparent"
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
                    "fill": "#ffffff",
                    "outlineWidth": 0,
                    "outlineColor": "transparent"
                }
            },
            "text": {
                "fontSize": 11,
                "fill": "#ffffff",
                "outlineWidth": 0,
                "outlineColor": "#ffffff"
            },
            "ticks": {
                "line": {},
                "text": {
                    "fontSize": 10,
                    "fill": "#333333",
                    "outlineWidth": 0,
                    "outlineColor": "transparent"
                }
            }
        },
        "annotations": {
            "text": {
                "fontSize": 13,
                "fill": "#333333",
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
            "wrapper": {},
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
        data={data}
        from="2018-04-01"
        to="2018-08-12"
        emptyColor="#eeeeee"
        colors={[ '#8edee7', '#80c0e3', '#44a8de', '#0592de' ]}
        margin={{ top: 40, right: 40, bottom: 100, left: 40 }}
        dayBorderWidth={2}
        dayBorderColor="#ffffff"
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'row',
                justify: false,
                itemCount: 4,
                itemWidth: 42,
                itemHeight: 36,
                itemsSpacing: 14,
                itemDirection: 'right-to-left',
                translateX: -60,
                translateY: -60,
                symbolSize: 20
            }
        ]}
    />
)

export default MyResponsiveTimeRange