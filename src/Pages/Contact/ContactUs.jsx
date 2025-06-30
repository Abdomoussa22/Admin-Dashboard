
import React from 'react'
import { Box, Button } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';
import { rows } from './data';
import { columns } from './data';
import clsx from 'clsx';
import {
  Toolbar,
  ToolbarButton,
  ColumnsPanelTrigger,
  FilterPanelTrigger,
  ExportCsv,
  ExportPrint,
  QuickFilter,
  QuickFilterControl,
  QuickFilterClear,
  QuickFilterTrigger,
} from '@mui/x-data-grid';
import SearchIcon from '@mui/icons-material/Search';
import CancelIcon from '@mui/icons-material/Cancel';
import Header from '../../components/Header/Header';


function TextInput(props) {
  return (
    <input
      {...props}
      className={clsx(
        'h-9 w-full rounded border border-neutral-200 dark:border-neutral-700 dark:bg-neutral-900 px-2.5 text-base text-neutral-900 dark:text-neutral-200 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600',
        props.className,
      )}
    />
  );
}
function CustomToolbar() {
  return (
    <Toolbar className="gap-2! p-2!">
      <ColumnsPanelTrigger
        render={<ToolbarButton render={<Button>Columns</Button>} />}
      />
      <FilterPanelTrigger
        render={<ToolbarButton render={<Button>Filter</Button>} />}
      />
      <ExportCsv render={<ToolbarButton render={<Button>Export</Button>} />} />
      <ExportPrint render={<ToolbarButton render={<Button>Print</Button>} />} />
      <QuickFilter
        render={(props, state) => (
          <div {...props} className="ml-auto flex overflow-clip">
            <QuickFilterTrigger
              className={state.expanded ? 'rounded-r-none border-r-0' : ''}
              render={
                <ToolbarButton
                  render={
                    <Button aria-label="Search">
                      <SearchIcon fontSize="small" />
                    </Button>
                  }
                />
              }
            />
            <div
              className={clsx(
                'flex overflow-clip transition-all duration-300 ease-in-out',
                state.expanded ? 'w-48' : 'w-0',
              )}
            >
              <QuickFilterControl
                aria-label="Search"
                placeholder="Search"
                render={({ slotProps, ...controlProps }) => (
                  <TextInput
                    {...controlProps}
                    {...slotProps?.htmlInput}
                    className={clsx(
                      'flex-1 rounded-l-none',
                      state.expanded && state.value !== '' && 'rounded-r-none',
                    )}
                  />
                )}
              />
              {state.expanded && state.value !== '' && (
                <QuickFilterClear
                  render={
                    <Button aria-label="Clear" className="rounded-l-none">
                      <CancelIcon fontSize="small" />
                    </Button>
                  }
                />
              )}
            </div>
          </div>
        )}
      />
    </Toolbar>
  );
}
const ContactUs = () => {
  return (
    
    <>
    
<<<<<<< HEAD
      <Box className="container">
=======
      <Box className="container" mt={{xs:10 }} ml={{xs :10 , sm:13}} width={{xs:'307px' , sm:'auto'}} >
>>>>>>> 049d23a (second device)
        <Header title={"Contact"} subTitle={"List of Contacts for Future Reference"}/>
        <div style={{ height: '100vh', width: '100%' }}>
          
          <DataGrid     slots={{ toolbar: CustomToolbar }}
            showToolbar
           rows={rows}
            // @ts-ignore
            columns={columns} />
        </div>
      </Box>
    </>
  )
}

export default ContactUs