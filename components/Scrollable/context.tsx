import { createContext, FC, useContext } from "react";

type Props = { isDragging: boolean }

const DragContext = createContext<boolean>(false)

export const DragContextProvider: FC<Props> = ({ children, isDragging }) => (
  <DragContext.Provider value={isDragging}>
    {children}
  </DragContext.Provider>
)

export const useIsDragging = () => useContext(DragContext)