import * as React from 'react';
import { Container } from 'semantic-ui-react';
import { observer } from 'mobx-react';
import AgendaStore from './store';

import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

interface Props {
  agenda: AgendaStore
}

const localizer = momentLocalizer(moment)

@observer
export default class ListAgenda extends React.Component<Props>{

  render() {
    return (
      <Container>
        <div>
          <Calendar
            localizer={localizer}            
            startAccessor="start"
            endAccessor="end"
          />
        </div>
      </Container>
    )
  }
}
