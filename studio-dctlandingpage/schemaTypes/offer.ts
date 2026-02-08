import { defineType, defineField } from "sanity";

export default defineType({
  name: "offer",
  title: "Offer",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Offer Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "offerPrice",
      title: "Offer Price",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "regularPrice",
      title: "Regular Price",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "registerFee",
      title: "Register Fee",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "startsAt",
      title: "Offer Start Date & Time",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "durationMinutes",
      title: "Offer Duration (minutes)",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "seatsLeft",
      title: "Seats Left",
      type: "number",
    }),

    defineField({
      name: "bannerImage",
      title: "Offer Banner Image",
      type: "image",
      options: { hotspot: true },
    }),
  ],
});
