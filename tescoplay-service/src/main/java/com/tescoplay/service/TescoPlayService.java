package com.tescoplay.service;

import java.util.List;

import com.couchbase.client.java.Bucket;
import com.couchbase.client.java.document.RawJsonDocument;
import com.couchbase.client.java.document.json.JsonObject;
import com.couchbase.client.java.query.N1qlQuery;
import com.couchbase.client.java.query.N1qlQueryResult;
import com.couchbase.client.java.query.N1qlQueryRow;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectReader;
import com.fasterxml.jackson.databind.ObjectWriter;

public class TescoPlayService {
	

	
	public static TescoPlayResponse getPoints(String jsonString, Bucket bucket) throws Exception {
		
		TescoPlayResponse playResponse = new TescoPlayResponse();

		ObjectMapper mapper = new ObjectMapper();
		
		ObjectReader objectReader = mapper.readerFor(TescoPlayRequest.class);
		
		TescoPlayRequest tescoPlayRequest = objectReader.readValue(jsonString);
		
		CustomerPoints customerPoints = getCustomerDetails(tescoPlayRequest.getCustomerId(), bucket);
		
		if(customerPoints == null){
			playResponse.setCustomerId(tescoPlayRequest.getCustomerId());
			playResponse.setSuccess(false);
			playResponse.setErrorDesc("Customer Not found");
			return playResponse;
		}
	
		
		playResponse.setCustomerId(customerPoints.getCustomerId());
		playResponse.setPoints(customerPoints.getPoints());
		playResponse.setSuccess(true);
		return playResponse;

	}
	
	
	public static CustomerPoints getCustomerDetails(String customerId, Bucket bucket) throws Exception {
		
		ObjectMapper mapper = new ObjectMapper();
		
		ObjectReader objectReader = mapper.readerFor(CustomerPoints.class);
		
		RawJsonDocument jsonDocument = bucket.get(customerId, RawJsonDocument.class);
		
		
		if(jsonDocument == null){
			return null;
		}
		
		CustomerPoints customerPoints = objectReader.readValue(jsonDocument.content().toString());
	
		return customerPoints;
		
		
	}
	
	public static Promotion getPromotionDetails(String promoId, Bucket bucket) throws Exception {
		
		ObjectMapper mapper = new ObjectMapper();
		
		ObjectReader objectReader = mapper.readerFor(Promotion.class);
		
		RawJsonDocument jsonDocument = bucket.get(promoId, RawJsonDocument.class);
		
		
		if(jsonDocument == null){
			return null;
		}
		
		Promotion promotion = objectReader.readValue(jsonDocument.content().toString());
	
		return promotion;
		
		
	}
	
	public static TescoPlayResponse applyScore(String jsonString, Bucket bucket) throws Exception {
		
		TescoPlayResponse playResponse = new TescoPlayResponse();

		ObjectMapper mapper = new ObjectMapper();
		
		ObjectReader objectReader = mapper.readerFor(TescoPlayRequest.class);
		
		ObjectWriter objectWriter = mapper.writerFor(CustomerPoints.class);

		TescoPlayRequest tescoPlayRequest = objectReader.readValue(jsonString);
		
		CustomerPoints customerPoints = getCustomerDetails(tescoPlayRequest.getCustomerId(), bucket);
		
		if(customerPoints == null){
			
			playResponse.setCustomerId(tescoPlayRequest.getCustomerId());
			playResponse.setSuccess(false);
			playResponse.setErrorDesc("customer not found");
			
			return playResponse;
		}
		
		Promotion promotionDetails = getPromotionDetails(tescoPlayRequest.getPromoId(), bucket);
		
		if(promotionDetails == null){
			
			playResponse.setCustomerId(tescoPlayRequest.getCustomerId());
			playResponse.setSuccess(false);
			playResponse.setErrorDesc("promotion not applied");
			
			return playResponse;
		}
		
		if(promotionDetails.getPromotionType().equals("points")){
			
			long finalPoints = customerPoints.getPoints() +  tescoPlayRequest.getScore() * promotionDetails.getFactor();
			
			customerPoints.setPoints(finalPoints);

			String updatedJsonString = objectWriter.writeValueAsString(customerPoints);
			RawJsonDocument jsonDocument = RawJsonDocument.create(customerPoints.getCustomerId(), updatedJsonString);

			RawJsonDocument jsonDocumentUpdated = bucket.upsert(jsonDocument);
			
			if(jsonDocumentUpdated == null){
				playResponse.setCustomerId(tescoPlayRequest.getCustomerId());
				playResponse.setSuccess(false);
				playResponse.setErrorDesc("unable to apply score");
				
				
			}
			
			playResponse.setCustomerId(tescoPlayRequest.getCustomerId());
			playResponse.setSuccess(true);
			playResponse.setErrorDesc("successfully applied score to customer");
			playResponse.setAddedPoints(tescoPlayRequest.getScore() * promotionDetails.getFactor() );
			playResponse.setPoints(finalPoints);
			return playResponse;
			
		}else if(promotionDetails.getPromotionType().equals("voucher")){
			
		}
		
		
		return playResponse;
			

	}
	
	public static TescoPlayResponse createCustomer(String jsonString, Bucket bucket) throws Exception {
		
		TescoPlayResponse playResponse = new TescoPlayResponse();

		ObjectMapper mapper = new ObjectMapper();
		
		ObjectReader objectReader = mapper.readerFor(TescoPlayRequest.class);
		
		ObjectWriter objectWriter = mapper.writerFor(CustomerPoints.class);

		TescoPlayRequest tescoPlayRequest = objectReader.readValue(jsonString);
		
		
		CustomerPoints customerPoints = new CustomerPoints();
		
		customerPoints.setCustomerId(tescoPlayRequest.getCustomerId());
		
		customerPoints.setPoints(0);
		
		
		//CustomerPoints customerPoints = getCustomerDetails(tescoPlayRequest.getCustomerId(), bucket);
		
		
		String createdJsonString = objectWriter.writeValueAsString(customerPoints);
		RawJsonDocument jsonDocument = RawJsonDocument.create(customerPoints.getCustomerId(), createdJsonString);

		RawJsonDocument jsonDocumentCreated = bucket.upsert(jsonDocument);
		
		if(jsonDocumentCreated == null){
			playResponse.setCustomerId(tescoPlayRequest.getCustomerId());
			playResponse.setSuccess(false);
			playResponse.setErrorDesc("unable to create customer");
			
			return playResponse;
		}
		
		playResponse.setCustomerId(tescoPlayRequest.getCustomerId());
		playResponse.setSuccess(true);
		playResponse.setErrorDesc("successfully created customer");
		return playResponse;
			

	}
	
	
public static TescoPlayPromotionResponse createPromotion(String jsonString, Bucket bucket) throws Exception {
		
		TescoPlayPromotionResponse playPromoResponse = new TescoPlayPromotionResponse();

		ObjectMapper mapper = new ObjectMapper();
		
		ObjectReader objectReader = mapper.readerFor(TescoPlayPromotionRequest.class);
		
		ObjectWriter objectWriter = mapper.writerFor(Promotion.class);

		TescoPlayPromotionRequest tescoPlayPromotion = objectReader.readValue(jsonString);
		
		
		Promotion promotion = new Promotion();
		
		promotion.setPromotionId(tescoPlayPromotion.getPromotionId());
		
		promotion.setPromotionType(tescoPlayPromotion.getPromoType());
		
		promotion.setCalType(tescoPlayPromotion.getCalType());
		
		promotion.setFactor(tescoPlayPromotion.getFactor());
		
		
		
		String createdJsonString = objectWriter.writeValueAsString(promotion);
		RawJsonDocument jsonDocument = RawJsonDocument.create(promotion.getPromotionId(), createdJsonString);

		RawJsonDocument jsonDocumentCreated = bucket.upsert(jsonDocument);
		
		if(jsonDocumentCreated == null){
			playPromoResponse.setPromotionId(tescoPlayPromotion.getPromotionId());
			playPromoResponse.setSuccess(false);
			playPromoResponse.setDesc("unable to create promotion");
			
			return playPromoResponse;
		}
		
		playPromoResponse.setPromotionId(tescoPlayPromotion.getPromotionId());
		playPromoResponse.setSuccess(true);
		playPromoResponse.setDesc("promotion created successfully");
		
		return playPromoResponse;
			

	}


public static TescoPlayGameResponse createGame(String jsonString, Bucket bucket) throws Exception {
	
	TescoPlayGameResponse playGameResponse = new TescoPlayGameResponse();

	ObjectMapper mapper = new ObjectMapper();
	
	ObjectReader objectReader = mapper.readerFor(TescoPlayGameRequest.class);
	
	ObjectWriter objectWriter = mapper.writerFor(Game.class);

	TescoPlayGameRequest tescoPlayGameReq = objectReader.readValue(jsonString);
	
	
	Game game = new Game();
	
	game.setGameId(tescoPlayGameReq.getGameId());
	
	game.setUrl(tescoPlayGameReq.getUrl());
	
	game.setPromoId(tescoPlayGameReq.getPromotionId());
	
	game.setEnabled(tescoPlayGameReq.isEnabled());
	
	
	
	String createdJsonString = objectWriter.writeValueAsString(game);
	RawJsonDocument jsonDocument = RawJsonDocument.create(game.getGameId(), createdJsonString);

	RawJsonDocument jsonDocumentCreated = bucket.upsert(jsonDocument);
	
	if(jsonDocumentCreated == null){
		playGameResponse.setGameId(tescoPlayGameReq.getGameId());
		playGameResponse.setSuccess(false);
		playGameResponse.setDesc("unable to create game");
		
		return playGameResponse;
	}
	
	playGameResponse.setGameId(tescoPlayGameReq.getGameId());
	playGameResponse.setSuccess(true);
	playGameResponse.setDesc("game created successfully");
	
	return playGameResponse;
		

}

public static TescoPlayGetGameResponse getGame(Bucket bucket) throws Exception {
	
	TescoPlayGetGameResponse playGetGameResponse = new TescoPlayGetGameResponse();
	
	N1qlQueryResult result = bucket.query(N1qlQuery.simple("select * from tescoplay where type = 'game' and enabled = true"));

	if (result == null || !result.finalSuccess()) {
		System.out.println("null result");
		return null;
	}

	List<N1qlQueryRow> allGames =  result.allRows();
	
	JsonObject resultJson = null;
	
	JsonObject finalJson = null;
	
	for(N1qlQueryRow row : allGames){
		
		resultJson = row.value().getObject("tescoplay");
		
		if(resultJson.getBoolean("enabled")){
			
			finalJson = resultJson;
			break;
		}
		
	}
	if(finalJson!=null){
		
		playGetGameResponse.setGameId(finalJson.getString("gameId"));
		playGetGameResponse.setPromotionId(finalJson.getString("promoId"));
		playGetGameResponse.setUrl(finalJson.getString("url"));
		playGetGameResponse.setSuccess(true);
		playGetGameResponse.setDesc("enabled game found");
		
	}else{
		
		playGetGameResponse.setSuccess(false);
		playGetGameResponse.setDesc("enabled game not found or no games found");
	}
	return playGetGameResponse;
		

}

}
