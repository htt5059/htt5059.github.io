import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ServiceDialog extends Component {
  constructor(props){
    super(props)
    this.state = {
      isOpen: props.isOpen? props.isOpen : false,
      name: props.name ? props.name : "Title",
      description: props.description ? props.description : {key: "Undefined", value: "Undefined"},
      callBack: props.callBack
    }
  }

  close = () => {
    this.state.isOpen = false;
    this.state.callBack(this.state.isOpen);
    console.log(this.state.isOpen)
  }

  render(){
    return (
      <>
        <Dialog open={this.state.isOpen} as="div" className="relative z-10" onClose={close}>
          <div className="fixed inset-0 z-10 w-full overflow-y-auto">
            <div className="flex bg-white/50 min-h-full items-center justify-center p-4">
              <DialogPanel
                transition
                className="w-full max-w-md rounded-xl bg-black/50 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
              >
                <DialogTitle as="h3" className="text-xl font-bold text-white">
                  {this.state.name}
                </DialogTitle>
                <ul className="list-disc list-inside">
                    {this.state.description.map(
                        (item) => (
                            <li key={item.key} className="text-white">
                                <span>
                                    <span className="font-bold">{item.key}</span>: <span>{item.value}</span>
                                </span>
                            </li> 
                        )
                    )}
                </ul>
                <div className="mt-4">
                  <Button
                    className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                    onClick={this.close}
                  >
                    Got it, thanks!
                  </Button>
                </div>
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      </>
    )
  }
}
ServiceDialog.propTypes = {
  isOpen: PropTypes.bool,
  callBack: PropTypes.func.isRequired,
  name: PropTypes.string,
  description: PropTypes.array,
}
export default ServiceDialog;