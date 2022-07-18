import React, { useCallback, useRef, useState } from 'react'
import Input from "../Input";
import PropTypes from "prop-types";

function Editable({
                    value = '',
                    onSave,
                    title,
                    className = '',
                    ...props }) {
  const inputRef = useRef()
  const containerRef = useRef()
  const editing = useRef(false)
  const [internalValue, setValue] = useState(value)

  const handleSave = useCallback(async () => {
    if (!inputRef?.current?.validity?.valid) {
      inputRef?.current?.reportValidity?.()
      return
    }

    editing.current = false

    if (internalValue === value) return

    containerRef?.current?.focus()
    const success = await onSave?.(internalValue)
    if (!success) {
      setValue(value)
    }
  }, [onSave, internalValue, value, inputRef?.current])

  return (
    <div
      className={`focus:outline-none border border-transparent rounded focus:border-border ${className}`}
      tabIndex={0}
      ref={containerRef}
      onKeyDown={e => {
        if (e.key === 'Enter') {
          inputRef?.current?.focus()
        }
      }}>
      <Input
        {...props}
        variant={'text-editable'}
        tabIndex={-1}
        style={{
          maxWidth: '100%',
          textOverflow: 'ellipsis',
          overflow: 'hidden',
        }}
        title={title}
        ref={inputRef}
        type={'text'}
        value={internalValue}
        onBlur={() => {
          if (editing.current) {
            handleSave()
          }
        }}
        onFocus={() => {
          editing.current = true
        }}
        onKeyDown={e => {
          e.stopPropagation()
          if (e.key === 'Enter') {
            handleSave()
          }
          if (e.key === 'Escape') {
            setValue(value)
            editing.current = false
            containerRef?.current?.focus()
          }
        }}
        onChange={setValue}
      />
    </div>
  )
}

Editable.propTypes = {
  /**
   * Controlled value.
   */
  value: PropTypes.string,
  /**
   * The function should return true if the value was saved successfully.
   */
  onSave: PropTypes.func,
  /**
   * Title for the input that appears on hover.
   */
  title: PropTypes.string,
  /**
   * Classname.
   */
  className: PropTypes.string,
}

export default Editable
