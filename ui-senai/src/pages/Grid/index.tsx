import React from 'react';
import { DisplayG, margin96, width12, width96 } from 'senai-design-system';

export default function Grid() {
    return (    
        <>
            <DisplayG rows={1} columns={10} gap="9px">
                <div style={{ background: 'lightblue' }}>Item 1</div>
                <div style={{ background: 'lightgreen' }}>Item 2</div>
                <div style={{ background: 'lightcoral' }}>Item 3</div>
                <div style={{ background: 'lightgoldenrodyellow' }}>Item 4</div>
                <div style={{ background: 'lightgray' }}>Item 5</div>
                <div style={{ background: 'lightpink' }}>Item 6</div>
                <div style={{ background: 'lightpink' }}>Item 7</div>
                <div style={{ background: 'lightpink' }}>Item 8</div>
                <div style={{ background: 'lightpink' }}>Item 9</div>                                                                                   
                <div style={{ background: 'lightpink' }}>Item 10</div>
            </DisplayG>
            
            <div style={{ background: 'lightblue', ...width96, ...margin96 }}>Item 1</div>
        </>
    );
  };
  