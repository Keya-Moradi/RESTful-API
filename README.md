# RESTful-API

Concepts of RESTful routing and exposing API endpoints using Postman

| HTTP Method (Verb) | Path/Endpoint/URI     | CRUD Operation            | Route Name | Has Data Payload? | Purpose                                                                                            | Render/Redirect Action        |
| ------------------ | --------------------- | ------------------------- | ---------- | ----------------- | -------------------------------------------------------------------------------------------------- | ----------------------------- |
| GET                | `/amazonListings`              | Read all _amazonListings_          | index      | No                | Renders a view that shows all listings                                                                | `res.render('amazonListings/index')`   |
| GET                | `/amazonListings/:blogId`      | Read a specific _amazonListing_    | show       | No                | Renders a view that shows a specific Amazon listing                                                          | `res.render('blogs/show')`    |
| GET                | `/amazonListings/newListing`          | None                      | new        | No                | Renders a view including a form the user can fill out and submit to add a new listing                 | `res.render('amazonListing/new')`     |
| GET                | `/amazonListings/:listingId/edit` | See note below*           | edit       | No                | Renders a view including a filled out form the user can edit and submit to update a specific listing  | `res.render('amazonListing/edit')`    |
| POST               | `/amazonListings`              | Create a new _amazonListing_       | create     | Yes               | Handles the user submitting a form to create a new listing                                            | `res.redirect('/you-choose')` |
| PUT                | `/amazonListings/:listingId`      | Update a specific _amazonListing_  | update     | Yes               | Handles the user submitting a form to update a specific listing                                       | `res.redirect('/you-choose')` |
| DELETE             | `/amazonListings/:listingId`      | Delete a specific _amazonListing_  | delete     | No                | Handles the user request to delete a specific listing                                                 | `res.redirect('/you-choose')` |

*NOTE: The `edit` route may optionally read data for a specific listing to pre-fill data in the form that will ultimately be rendered to the user.
