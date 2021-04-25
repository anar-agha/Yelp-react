const apiKey =
  "o23bLAIwPzUA2XqRMBiZWfo_jRYzpDB-Q_x2HYbRexEEGwu2VfLhWt4gz0aPU8Z5zQylFcNHYnJWuX6QtIdtgFvoTN1dkRBui-A0f9MtZzTtzW2vlNwTwF0Qm8KDYHYx";

  const Yelp = {
    search(term, location, sortBy) {
      return fetch(
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.businesses) {
            return data.businesses.map((business) => {
              console.log(data);
              return {
                id: business.id,
                imageSrc: business.image_url,
                name: business.name,
                adress: business.adress1,
                city: business.location.city,
                state: business.location.state,
                zipCode: business.location.zip_code,
                category: business.categories[0].title,
                rating: business.rating,
                reviewCount: business.review_count,
              };
            });
          } else {
            return <h2>HaHaHa</h2>;
          }
        })
        .catch(() => console.log("hahaha"));
    },
  };
  
  export default Yelp;