import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'

function FeedbackList({ feedback, handleDelete } ) {
    if (!feedback || feedback.length === 0) {
        return <p>No Feedback Yet!</p>
  }
  
  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={`feedback-item-${item.id}`} 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            layout
          >
            <FeedbackItem
              key={`item-${item.id}`}
              item={item}
              handleDelete={handleDelete}
            />
            {/* <FeedbackItem key={item.id} item={item} /> */}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
  
  //Feedback List item without Animation
  // return (
  //   <div className='feedback-list'>
  //         {feedback.map(( item ) => (
  //           <FeedbackItem
  //             key={item.id}
  //             item={item}
  //             handleDelete={handleDelete} 
  //             />
  //     ))}
  //   </div>
  // )
}

FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
        })
  ),
  handleDelete: PropTypes.func.isRequired,
}

export default FeedbackList
