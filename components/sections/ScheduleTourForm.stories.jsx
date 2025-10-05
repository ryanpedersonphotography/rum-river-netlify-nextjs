import ScheduleTourForm from './ScheduleTourForm';

export default {
  title: 'Sections/ScheduleTourForm',
  component: ScheduleTourForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

// Full tour booking form (default)
export const TourBooking = {
  args: {
    formName: 'tour-booking-demo',
    tone: 'brand',
    background: 'gradient-blocks',
    header: {
      accent: 'Schedule Your Tour',
      title: 'Start Planning Your Perfect Day',
      description: "We'd love to show you around our beautiful venue and discuss your wedding vision.",
      align: 'center',
    },
    fields: [
      { type: 'text', name: 'name', label: 'Your Name *', required: true, full: true, autoComplete: 'name' },
      { type: 'email', name: 'email', label: 'Email Address *', required: true, autoComplete: 'email' },
      { type: 'tel', name: 'phone', label: 'Phone Number *', required: true, autoComplete: 'tel' },
      { type: 'date', name: 'proposedEventDate', label: 'Proposed Event Date' },
      { type: 'date', name: 'preferredTourDate', label: 'Preferred Tour Date *', required: true },
      { type: 'select', name: 'preferredTourTime', label: 'Preferred Tour Time', options: ['10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM'] },
      { type: 'select', name: 'guestCount', label: 'Estimated Guest Count', options: ['50-100', '100-150', '150-200', '200+'] },
      { type: 'textarea', name: 'message', label: 'Additional Information', full: true, rows: 6 },
    ],
    submitText: 'Schedule Tour',
  },
};

// Simple contact form variant
export const ContactForm = {
  args: {
    formName: 'contact-demo',
    tone: 'surface',
    background: 'none',
    header: {
      accent: 'Get In Touch',
      title: 'Send Us a Message',
      align: 'center',
    },
    fields: [
      { type: 'text', name: 'name', label: 'Name *', required: true, full: true },
      { type: 'email', name: 'email', label: 'Email *', required: true },
      { type: 'textarea', name: 'message', label: 'Message', full: true, rows: 5 },
    ],
    submitText: 'Send Message',
  },
};

// Minimal lead capture
export const LeadCapture = {
  args: {
    formName: 'newsletter-demo',
    redirectPath: '/thank-you',
    tone: 'accent',
    header: {
      accent: 'Stay Updated',
      title: 'Join Our Newsletter',
      description: 'Get the latest updates and special offers.',
      align: 'center',
    },
    fields: [
      { type: 'text', name: 'name', label: 'Name *', required: true, full: true },
      { type: 'email', name: 'email', label: 'Email *', required: true, full: true },
    ],
    submitText: 'Subscribe',
  },
};

// Event booking with all field types
export const EventBooking = {
  args: {
    formName: 'event-booking-demo',
    tone: 'brand',
    background: 'gradient-hero',
    header: {
      accent: 'Book Your Event',
      title: 'Reserve Your Date',
      description: 'Fill out the form below and we\'ll get back to you within 24 hours.',
      align: 'center',
    },
    fields: [
      { type: 'text', name: 'firstName', label: 'First Name *', required: true },
      { type: 'text', name: 'lastName', label: 'Last Name *', required: true },
      { type: 'email', name: 'email', label: 'Email Address *', required: true },
      { type: 'tel', name: 'phone', label: 'Phone Number *', required: true },
      { type: 'date', name: 'eventDate', label: 'Preferred Event Date *', required: true },
      { type: 'select', name: 'eventType', label: 'Event Type *', required: true, options: ['Wedding', 'Corporate Event', 'Birthday Party', 'Anniversary', 'Other'] },
      { type: 'select', name: 'guestCount', label: 'Number of Guests', options: ['1-50', '51-100', '101-150', '151-200', '200+'] },
      { type: 'select', name: 'budget', label: 'Estimated Budget', options: ['$5,000-$10,000', '$10,000-$20,000', '$20,000-$30,000', '$30,000+'] },
      { type: 'textarea', name: 'details', label: 'Event Details', full: true, rows: 6, placeholder: 'Tell us about your vision for this event...' },
    ],
    submitText: 'Request Booking',
  },
};

// Compact inquiry form
export const QuickInquiry = {
  args: {
    formName: 'quick-inquiry-demo',
    tone: 'muted',
    size: 'md',
    header: {
      accent: 'Quick Question',
      title: 'How Can We Help?',
      align: 'left',
    },
    fields: [
      { type: 'text', name: 'name', label: 'Name', full: true },
      { type: 'email', name: 'email', label: 'Email *', required: true, full: true },
      { type: 'textarea', name: 'question', label: 'Your Question', full: true, rows: 4 },
    ],
    submitText: 'Send',
  },
};

// Dark mode preview - toggle toolbar to light to compare
export const DarkPreview = {
  parameters: {
    globals: { theme: "dark" },
  },
};

