import React, { useState, useRef, Fragment } from 'react'
import '../../../node_modules/gestalt/dist/gestalt.css'
import { Box, IconButton, Popover, Text } from "gestalt";


export default function Liked() {
    const [open, setOpen] = useState(false);
    const [checked, setChecked] = useState(false);
    const anchorRef = useRef(null);
    return (
      <Fragment>
        <IconButton
          accessibilityLabel="Love Reaction to a Pin"
          bgColor="white"
          icon="heart"
          iconColor="red"
          onClick={() => { 
              setOpen(true, setChecked(!checked))}}
          selected={checked}
          ref={anchorRef}
        />
        {open && checked &&(
          <Popover
            anchor={anchorRef.current}
            idealDirection="right"
            onDismiss={() => setOpen(false)}
            shouldFocus={false}
          >
            <Box padding={3}>
              <Text weight="bold">You loved this pin!</Text>
            </Box>
          </Popover>
        )}
      </Fragment>
    );
}

