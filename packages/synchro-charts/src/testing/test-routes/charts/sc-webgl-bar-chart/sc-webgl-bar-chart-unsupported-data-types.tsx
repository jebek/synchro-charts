import { Component, h } from '@stencil/core';
import { MONTH_IN_MS } from '../../../../utils/time';
import { Y_VALUE_STRING } from '../constants';
import { DataType } from '../../../../utils/dataConstants';

// viewport boundaries
const Y_MIN = 0;
const Y_MAX = 5000;

const X_MIN = new Date(2000, 0);
const X_MAX = new Date(2001, 3);

const LEFT_X = new Date(2000, 3).getTime();
const MIDDLE_X = new Date(2000, 6).getTime();
const RIGHT_X = new Date(2000, 9).getTime();

/**
 * Used to test the behavior of a bar chart when dataStreams have unsupported dataTypes
 */

@Component({
  tag: 'sc-webgl-bar-chart-unsupported-data-types',
})
export class ScWebglBarChartUnsupportedDataTypes {
  render() {
    return (
      <div class="synchro-chart-tests">
        <div id="chart-container" style={{ marginTop: '20px', width: '500px', height: '500px' }}>
          <sc-bar-chart
            dataStreams={[
              {
                id: 'test',
                color: 'black',
                name: 'test-name',
                aggregates: {},
                data: [
                  {
                    x: LEFT_X,
                    y: Y_VALUE_STRING,
                  },
                  {
                    x: MIDDLE_X,
                    y: Y_VALUE_STRING,
                  },
                  {
                    x: RIGHT_X,
                    y: Y_VALUE_STRING,
                  },
                ],
                resolution: MONTH_IN_MS,
                dataType: DataType.STRING,
              },
            ]}
            size={{
              width: 500,
              height: 500,
            }}
            widgetId="widget-id"
            viewport={{
              yMin: Y_MIN,
              yMax: Y_MAX,
              start: X_MIN,
              end: X_MAX,
            }}
          />
        </div>
        <sc-webgl-context />
      </div>
    );
  }
}
